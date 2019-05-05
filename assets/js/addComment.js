import axios from 'axios';

const addCommentForm = document.getElementById('jsAddComment');
const commentList = document.getElementById('jsCommentList');
const commentNumber = document.getElementById('jsCommentNumber');
const compareForX = document.querySelectorAll('.jsCompareForX');
const compareForXSpan = document.getElementsByClassName('jsCompareForXSpan');



const decreaseNumber = () => {
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
}

const handleDeleteComment = async(event) => {
    event.preventDefault();
    const commentid = event.target.offsetParent.commentid;
     await axios({
        url:`/api/comment/delete`,
        method:'POST',
        data:{
            commentid
        }
    });
    decreaseNumber();
    window.location.reload();
}

const increaseNumber = () => {
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
}



const compareForXfunc = () => {
    for(let i = 0; i<compareForX.length; i+=1){
        if(compareForX[i].value===compareForX[i].dataset.user){
            compareForXSpan[i].innerHTML = '<i class = "fas fa-times" style="cursor:pointer;"></i>';
            compareForXSpan[i].addEventListener('click', handleDeleteComment);
            compareForXSpan[i].commentid = compareForX[i].dataset.commentid;
        }
    }
}

const addComment = (comment) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerHTML = comment;
    li.appendChild(span);
    commentList.prepend(li);
    increaseNumber();
}

const sendComment = async comment => {
    const videoId = window.location.href.split('/videos/')[1];
    const response = await axios({
        url:`/api/${videoId}/comment`,
        method:'POST',
        data:{
            comment
        }
    });
    if(response.status === 200){
        addComment(comment);
    }
    window.location.reload();
};

const handleSubmit = (event) => {
    event.preventDefault();
    const commentInput = addCommentForm.querySelector('input');
    const comment = commentInput.value;
    sendComment(comment);
    commentInput.value = '';
}

function init(){
    compareForXfunc();
    addCommentForm.addEventListener('submit', handleSubmit);
}

if(addCommentForm){
    init();
}
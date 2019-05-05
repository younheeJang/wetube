
const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';
const SEARCH = '/search';
const ME = '/me';

const USERS = '/users';
const USER_DETAIL = '/:id';
const EDIT_PROFILE = '/edit-profile';
const CHANGE_PASSWORD = '/change-password';

const VIDEOS = '/videos';
const UPLOAD='/upload';
const VIDEO_DETAIL = '/:id';
const EDIT_VIDEO = '/:id/edit';
const DELETE_VIDEO = '/:id/delete';

const GITHUB = '/auth/github';
const GITHUB_CALLBACK = '/auth/github/callback';

const FB = '/auth/facebook';
const FB_CALLBACK = '/auth/facebook/callback';

const API = '/api';
const REGISTER_VIEW = '/:id/view';
const ADD_COMMENT = '/:id/comment';
const DELETE_COMMENT = '/comment/delete';

const routes = {
    home:HOME,
    join:JOIN,
    login:LOGIN,
    logout:LOGOUT,
    search:SEARCH,
    me:ME,
    users:USERS,
    userDetail:id=>{
        if(id){
            return `/users/${id}`;
        }
            return USER_DETAIL
        
    },
    editProfile:EDIT_PROFILE,
    changePassword:CHANGE_PASSWORD,
    videos:VIDEOS,
    upload:UPLOAD,
    videoDetail:id=>{
        if(id){
            return `/videos/${id}`
        }
            return VIDEO_DETAIL;
        
    },
    editVideo:id=>{
        if(id){
            return `/videos/${id}/edit`;
        }
            return EDIT_VIDEO;
        
    },
    deleteVideo:id=>{
        if(id){
            return `/videos/${id}/delete`;
        }
            return DELETE_VIDEO;
        
    },
    github:GITHUB,
    githubCallback : GITHUB_CALLBACK,
    facebook : FB,
    facebookCallback : FB_CALLBACK,
    api:API,
    registerView:REGISTER_VIEW,
    addComment:ADD_COMMENT,
    deleteComment:DELETE_COMMENT
}

export default routes;

const APP_PATHS = {
    HOME_PAGE: '/',
    PROJECT_PAGE: (projectId: string = ':id') => `project/${projectId}`,
    EDITOR_PAGE: (projectId: string = ':id') => `project/${projectId}/editor`,
    TASKS_PAGE: (projectId: string = ':id') => `project/${projectId}/tasks`,
    RESOURCES_PAGE: (projectId: string = ':id') => `project/${projectId}/resources`
};

export default APP_PATHS;
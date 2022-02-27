import AuthService from './AuthService';
import { baseUrl, mainService } from './mainApiServiceConfig';

export default class ProjectsService extends AuthService {
    projectsUrl = `${baseUrl}/projects`;

    // ! =======================
    // ! ==== PROJECTS CRUD ====
    // ! =======================

    getProjects(props, pageSize = 10, currentPage = 1) {
        return new Promise((res, rej) => {
            mainService
                .get(`${this.projectsUrl}?pageSize=${pageSize}&currentPage=${currentPage}`)
                .then((response) =>
                    res({
                        data: response?.data?.documents || [],
                        pagination: response?.data?.pagination || {},
                        totals: response?.data?.totals || 0
                    })
                )
                .catch((error) => rej(error));
        });
    }
}

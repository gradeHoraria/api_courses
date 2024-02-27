import Mysql from "../repository/mysql"
import CreateCourseController from "./CreateCourse/CreateCourseController"
import CreateCourseService from "./CreateCourse/CreateCourseService"
import ViewCourseController from "./ViewCourse/ViewCourseController"
import ViewCourseService from "./ViewCourse/ViewCourseService"
import EditCourseController from "./EditCourse/EditCourseController"
import EditCourseService from "./EditCourse/EditCourseService"
import DeleteCourseController from "./DeleteCourse/DeleteCourseController"
import DeleteCourseService from "./DeleteCourse/DeleteCourseService"
import ListCoursesController from "./ListCourse/ListCourseController"
import ListCoursesService from "./ListCourse/ListCourseService"
import GetTokenService from "./GetToken/GetTokenService"
import GetTokenController from "./GetToken/GetTokenController"

const repository = new Mysql()

const createCourseService = new CreateCourseService(repository)
const createCourseController = new CreateCourseController(createCourseService)

const viewCourseService = new ViewCourseService(repository)
const viewCourseController = new ViewCourseController(viewCourseService)

const editCourseService = new EditCourseService(repository)
const editCourseController = new EditCourseController(editCourseService)

const deleteCourseService = new DeleteCourseService(repository)
const deleteCourseController = new DeleteCourseController(deleteCourseService)

const listCoursesService = new ListCoursesService(repository)
const listCoursesController = new ListCoursesController(listCoursesService)

const getTokenService = new GetTokenService()
const getTokenController = new GetTokenController(getTokenService)

export {
    createCourseController,
    viewCourseController,
    editCourseController,
    deleteCourseController,
    listCoursesController,
    getTokenController
}
<?php

$apis = [
    ["name" => "Badge" , "api" => "badge"],
    ["name" => "Contact" , "api" => "contact"],
    ["name" => "Course" , "api" => "course"],
    ["name" => "CourseCategory" , "api" => "course-category"],
    ["name" => "CoursePart" , "api" => "course-part"],
    ["name" => "CoursePartDocument" , "api" => "course-part-document"],
    ["name" => "CoursePartQuiz" , "api" => "course-part-quiz"],
    ["name" => "CourseSection" , "api" => "course-section"],
    ["name" => "FavoriteCourse" , "api" => "favorite-course"],
    ["name" => "Group" , "api" => "group"],
    ["name" => "Notification" , "api" => "notification"],
    ["name" => "Quiz" , "api" => "quiz"],
    ["name" => "QuizPart" , "api" => "quiz-part"],
    ["name" => "QuizPartPerform" , "api" => "quiz-part-perform"],
    ["name" => "ReadLater" , "api" => "read-later"],
    ["name" => "ReceivedNotification" , "api" => "received-notification"],
    ["name" => "Skill" , "api" => "skill"],
    ["name" => "SkillUserXP" , "api" => "skill-user-xp"],
    ["name" => "Speaker" , "api" => "speaker"],
    ["name" => "Speciality" , "api" => "speciality"],
    ["name" => "Student" , "api" => "student"],
    ["name" => "TypeContact" , "api" => "type-contact"],
    //["name" => "User" , "api" => "user"], ATTENTION A LUI
];

foreach ($apis as $api)
    createFile($api["name"], $api["api"]);
    

function createFile($name, $api){
    $camelCaseNameId = lcfirst($name). "Id";
    file_put_contents("./".$name."API.js",
    /// multiple line string
    <<<EOT
import * as UtilsAPI from './UtilsAPI';

export const getAll$name = (token,success,error) => {
    return UtilsAPI.getAll('$api',token,success,error);
}

export const getAllWithPage$name = (token,elementCount,actualPage,success,error) => {
    return UtilsAPI.getAllWithPage('$api',token,elementCount,actualPage,success,error);
}

export const get$name = ($camelCaseNameId,token,success,error) => {
    return UtilsAPI.get('$api',token,$camelCaseNameId,success,error);
}

export const post$name = (token,data,success,error) => {
    return UtilsAPI.post('$api',token,data,success,error);
}

export const patch$name = (token,$camelCaseNameId,data,success,error) => {
    return UtilsAPI.patch('$api',token,$camelCaseNameId,data,success,error);
}

export const remove$name = (token,$camelCaseNameId,success,error) => {
    return UtilsAPI.remove('$api',token,$camelCaseNameId,success,error);
}
EOT);
}


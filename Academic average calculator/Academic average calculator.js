let grade , credits , numOfCourses = 0 , multiplay , allCredits = 0 , anotherColumn = document.querySelector("#add") , tdAverage = document.querySelector("#addAverage") , tdCredits = document.querySelector("#addCredits") ;
let course  =[];
let courses =[];
let averages = [0];
let columns = [];
    //Calculate button
    document.querySelector("#calculate").onclick = function() {
        course = [];
        course.push(document.querySelector("#name").value);
        grade = document.querySelector("#grade").value;
        course.push(parseFloat(grade));
        credits = document.querySelector("#credits").value;
        course.push(parseFloat(credits));
        courses.push(course);
        if( !(courses[courses.length - 1][1] >= 0 && courses[courses.length - 1][1] <= 100) ){
            alert("Please enter a grade between 100-0!!!");
        }
        else if( !(courses[courses.length - 1][2] > 0) ){
            alert("Please enter a posetive number of credits!!!");
        }
        else{
            allCredits += courses[courses.length - 1][2] ;
            multiplay = courses[courses.length - 1][2] * courses[courses.length - 1][1] ;
            averages.push(((averages[averages.length - 1] * (allCredits - courses[courses.length - 1][2])) + multiplay) / allCredits);
            anotherColumn.innerHTML += `<tr><td>${courses.length}</td><td>${courses[courses.length - 1][0]}</td><td>${courses[courses.length - 1][1]}</td><td>${courses[courses.length - 1][2]}</td></tr>`;
            columns.push(anotherColumn.innerHTML);
            tdAverage.innerHTML = `${averages[averages.length - 1].toFixed(2)}`;
            tdCredits.innerHTML = `${allCredits.toFixed(2)}`;
        }
    }

    //Delete button
    document.querySelector("#delete").onclick = function() {
        if(averages[averages.length - 1] === 0){
            alert("You can not use in the delete button if you do not have at least one course to delete!!!");
        }
        else{
            allCredits -= courses[courses.length - 1][2] ;
            courses.pop();
            averages.pop();
            columns.pop();
            anotherColumn.innerHTML = columns[columns.length-1];
            tdAverage.innerHTML = `${averages[averages.length - 1].toFixed(2)}`;
            tdCredits.innerHTML = `${allCredits.toFixed(2)}`;
            if(columns[0] === undefined){
                anotherColumn.innerHTML = "<tr></tr>";
            }         
        }
    }


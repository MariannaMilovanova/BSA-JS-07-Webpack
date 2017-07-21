const _ = require('lodash');

export const userList = function (users){
    const container = document.getElementById('root');
    const sortedUsers = _.sortBy(users, 'age');
    this.showList = () => {
        for ( let i in sortedUsers ) {   
            const div = document.createElement("div");
            const innerDiv = document.createElement("div");
            const pic = document.createElement("img");
            pic.setAttribute("src", "dist/" + require('../../img/' + i + '.png'));
            pic.setAttribute("class", "user-pic");
            innerDiv.setAttribute("class", "innerDiv");
            div.className = "user";
            innerDiv.appendChild(pic);
            innerDiv.appendChild(div);
            div.append(sortedUsers[i].name + ', age: ' + sortedUsers[i].age + ' years');
            container.appendChild(innerDiv);
        }
    }
}

//hello!
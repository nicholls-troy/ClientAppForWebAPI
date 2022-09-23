let userTable = document.getElementById("userTable")
let userDataTable = document.getElementById("userDataTable")
let BaseURL = "https://jsonplaceholder.typicode.com/"
let users = "users"
let container

/**
 * STEP 1 - GET Users
 * Attach a click handler to the Get Users button. When the button is clicked, the handler sends a GET request to
 * the web API, which will respond by sending a JSON array of user objects. Use the fetch function to make the
 * request and handle the response.
 * Display the JSON data in an HTML table. Each user object in the array shotrd be displayed as a single row in the
 * table. Display the user ids as button elements.
 */
// function getUsers()
// {
//     let URI = BaseURL + users //gets the users from the url
//     userTable.innerHTML = ""  //to refresh it when we click the button
//     fetch(URI)
//         .then (response=>response.json())
//         .then (json=>{
//             for (i=0; i<json.length; i++)
//             {
//                 let user = json[i]
//                 let userId = user.id
//                 let name = user.name
//                 let email = user.email
//                 let phone = user.phone
//                 let website = user.website
//                 let header = `<tr><th> User Id for Posts </th> <th> User Id for Albums </th> <th> User Id for Comments </th> <th> User Id for Photos </th> 
//                                 <th> User Id for Todos </th> <th> Name </th> <th> Email </th> <th> Phone Number </th> <th> Website </th> </tr>`
//                 userTable.innerHTML += header
//                 let tdUserPosts = `<td><button onclick="getUserPosts(${userId},'${name}')"> ${userId} </button></td>`
//                 let tdUserAlbums = `<td><button onclick="getUserAlbums(${userId},'${name}')"> ${userId} </button></td>`
//                 let tdUserComments = `<td><button onclick="getUserComments(${userId},'${name}')"> ${userId} </button></td>`
//                 let tdUserPhotos = `<td><button onclick="getUserPhotos(${userId},'${name}')"> ${userId} </button></td>`
//                 let tdUserTodos = `<td><button onclick="getUserTodos(${userId},'${name}')"> ${userId} </button></td>`
//                 let td2 = `<td>${name}</td>`
//                 let td3 = `<td>${email}</td>`
//                 let td4 = `<td>${phone}</td>`
//                 let td5 = `<td>${website}</td>`
//                 let row = `<tr>${tdUserPosts}${tdUserAlbums}${tdUserComments}${tdUserPhotos}${tdUserTodos}${td2}${td3}${td4}${td5}</tr>`
//                 userTable.innerHTML += row
//             }
            
//         })
// }

/**
 * STEP 2 - Display User Posts
 * Create a button handler for the user id buttons. When a user id button is clicked, a table of the posts created by the
 * corresponding user is displayed on the web page. 
 * 
 * @param userId 
 * @param userName 
 */
// function getUserPosts(userId, userName)
// {
//     let URI = BaseURL + users + `/${userId}/posts`
//     userDataTable.innerHTML = ""
//     fetch(URI)
//         .then (response=>response.json())
//         .then (json => {
//             let row = `<tr><td colspan="2"><h3> ${userName} </h3></td></tr>`
//             userDataTable.innerHTML += row
//             row = `<tr><th> Post Id </th> <th> Title </th></tr>`
//             userDataTable.innerHTML += row
//             for (i=0; i<json.length; i++)
//             {
//                 let postId = json[i].id
//                 let title = json[i].title
//                 let row = `<tr><td>${postId}</td><td>${title}</td></tr>`
//                 userDataTable.innerHTML += row
//             }
//         })
// }

/**
 * STEP 3 - GET Resources
 * Add HTML and JavaScript code to allow the user to select any type of resource. When a resource type is selected, the
 * client sends a corresponding GET request to the Web API. The resource data received from the Web API is displayed in a
 * table on the web page. (You may reuse the table from Step 2, or create a separate table for this step.) 
 * 
 * STEP 4 - Add HTML and JavaScript to request and display each of the resources available via nested paths implemented by the
 * JSONPlaceholder API.
 * 
 * @param userId 
 * @param userName 
 */
function getUserAlbums(userId, userName)
{
    let URI = BaseURL + users + `/${userId}/albums`
    userDataTable.innerHTML = ""
    fetch(URI)
        .then (response=>response.json())
        .then (json => {
            let row = `<tr><td colspan="2"><h3> ${userName} </h3></td></tr>`
            userDataTable.innerHTML += row
            row = `<tr><th> Album Id </th> <th> Album Title </th>`
            userDataTable.innerHTML += row
            for (i=0; i<json.length; i++)
            {
                let albumId = json[i].id
                let title = json[i].title
                let row = `<tr><td>${albumId}</td><td>${title}</td></tr>`
                userDataTable.innerHTML += row
            }
        })
}

function getUserComments(userId, userName)
{
    let URI = BaseURL + users + `/${userId}/comments`
    userDataTable.innerHTML = ""
    fetch(URI)
        .then (response=>response.json())
        .then (json => {
            let row = `<tr><td colspan="2"><h3> ${userName} </h3></td></tr>`
            userDataTable.innerHTML += row
            row = `<tr><th> Comment Id </th> <th> Comment Body </th>`
            userDataTable.innerHTML += row
            for (i=0; i<json.length; i++)
            {
                let commentId = json[i].id
                let body = json[i].body
                let row = `<tr><td>${commentId}</td><td>${body}</td></tr>`
                userDataTable.innerHTML += row
            }
        })
}

function getUserPhotos(userId, userName)
{
    let URI = BaseURL + `albums/${userId}/photos`
    userDataTable.innerHTML = ""
    fetch(URI)
        .then (response=>response.json())
        .then (json => {
            let row = `<tr><td colspan="2"><h3> ${userName} </h3></td></tr>`
            userDataTable.innerHTML += row
            row = `<tr><th> Photo Id </th> <th> Photo Title </th>`
            userDataTable.innerHTML += row
            for (i=0; i<json.length; i++)
            {
                let photoId = json[i].id
                let title = json[i].title
                let row = `<tr><td>${photoId}</td><td>${title}</td></tr>`
                userDataTable.innerHTML += row
            }
        })
}

function getUserTodos(userId, userName)
{
    let URI = BaseURL + users + `/${userId}/todos`
    userDataTable.innerHTML = ""
    fetch(URI)
        .then (response=>response.json())
        .then (json => {
            let row = `<tr><td colspan="2"><h3> ${userName} </h3></td></tr>`
            userDataTable.innerHTML += row
            row = `<tr><th> Todo Id </th> <th> Todo Title </th>`
            userDataTable.innerHTML += row
            for (i=0; i<json.length; i++)
            {
                let todoId = json[i].id
                let title = json[i].title
                let row = `<tr><td>${todoId}</td><td>${title}</td></tr>`
                userDataTable.innerHTML += row
            }
        })
}

/**
 * STEP 5 - Modify the handler so that it uses axios to request the posts from the selected user.
 * Add catch() to handle any errors that occur during the request. Add code to log all request/response errors onto
 * the browser console.
 * Test your code by deliberately making invalid requests, or throwing exceptions.
 */
async function getUserPosts(userId, userName) 
{
    let URI = BaseURL + users + `/${userId}/posts`
    userDataTable.innerHTML = ""
    
    const appendToTable = (posts) => {
        let row = `<tr><td colspan="2"><h3> ${userName} </h3></td></tr>`
        userDataTable.innerHTML += row
        row = `<tr><th> Post Id </th> <th> Title </th></tr>`
        userDataTable.innerHTML += row
        posts.map(posts => {
            let postId = posts.id
            let title = posts.title
            let row = `<tr><td>${postId}</td><td>${title}</td></tr>`
            userDataTable.innerHTML += row
        })
    }

    /**
     * We just pass the URL of the endpoint as a parameter to this method. The method returns a promise, 
     * allowing us to use then() and catch() methods to handle the result. When the promise is resolved
     * successfully, you will get a response object back. This object has information about the response 
     * such as headers, data, config, status and even complete request object.
     */
    const fetchPosts = () => {
        axios.get(URI)
            .then(response => {
                const posts = response.data
                appendToTable(posts)
            })
            .catch(error => console.error(error))
    }
    
    fetchPosts()
}

axios.interceptors.request.use( 
    config=> {
        console.log("REQUEST: " + config.method)
        return config 
    }
)

axios.interceptors.response.use( 
    response=> {
        console.log("RESPONSE: " + response.status)
        return response 
    }
)

/**
 * Step 6 - Modify the handle code so that it makes simultaneous requests for all available resources associated with a given user.
 * (E.g. all posts, todos, albums, etc.) Use the Web API guide to determine what resources can be requested for a given user.
 * For this step, you should use axios.all as demonstrated in Lab 4. After completing this step, you should be able to do the
 * following:
 * Request and display a list of all users. (Step 1, replacing fetch with axios).
 * Click a user id to request all resources associated with the selected user.
 * Display all of the resources related to the selected user in a set of tables.
 */
function getUsers() 
{
    let URI = BaseURL + users 
    userTable.innerHTML = ""  

    const appendToTable = (users) => {
        let header = `<tr><th> User Id for All </th> <th> Name </th> <th> Email </th> <th> Phone Number </th> <th> Website </th> </tr>`
        userDataTable.innerHTML += header
        users.map(users => {
            let userId = users.id
            let name = users.name
            let email = users.email
            let phone = users.phone
            let website = users.website
            let tdUserAll = `<td><button onclick="axiosAll(${userId},'${name}')"> ${userId} </button></td>`
            let td = `<td>${name}</td><td>${email}</td><td>${phone}</td><td>${website}</td>`
            let row = `<tr>${tdUserAll}${td}</tr>`
            userDataTable.innerHTML += row
        })
    }

    const fetchUsers = () => {
        axios.get(URI)
            .then(response => {
                const users = response.data
                appendToTable(users)
            })
            .catch(error => console.error(error))
        userDataTable.innerHTML = ""
    }
    
    fetchUsers()
}

function axiosAll(userId, userName)
{
    
    userDataTable.innerHTML = ""

    const appendPosts = (posts) => {
        let row = `<tr><td colspan="2"><h3> ${userName} </h3></td></tr>`
        userDataTable.innerHTML += row
        row = `<tr><th> Post Id </th> <th> Title </th></tr>`
        userDataTable.innerHTML += row
        posts.map(posts => {
            let postId = posts.id
            let title = posts.title
            let row = `<tr><td>${postId}</td><td>${title}</td></tr>`
            userDataTable.innerHTML += row
        })
    }

    const appendAlbums = (albums) => {
        row = `<tr><th> Album Id </th> <th> Title </th></tr>`
        userDataTable.innerHTML += row
        albums.map(albums => {
            let albumId = albums.id
            let title = albums.title
            let row = `<tr><td>${albumId}</td><td>${title}</td></tr>`
            userDataTable.innerHTML += row
        })
    }

    const appendComments = (comments) => {
        row = `<tr><th> Comment ID </th> <th> Comment Name </th> <th> Comment </th></tr>`
        userDataTable.innerHTML += row
        comments.map(comments => {
            let commentId = comments.id
            let name = comments.name
            let body = comments.body
            let row = `<tr><td>${commentId}</td><td>${name}</td><td>${body}</td></tr>`
            userDataTable.innerHTML += row
        })
    }

    const appendPhotos = (photos) => {
        row = `<tr><th> Photo ID </th> <th> Title </th> <th> URL </th></tr>`
        userDataTable.innerHTML += row
        photos.map(photos => {
            let photoId = photos.id
            let title = photos.title
            let url = photos.url
            let row = `<tr><td>${photoId}</td><td>${title}</td><td>${url}</td></tr>`
            userDataTable.innerHTML += row
        })
    }

    const appendTodos = (todos) => {
        row = `<tr><th> Todos ID </th> <th> Title </th></tr>`
        userDataTable.innerHTML += row
        todos.map(todos => {
            let todoId = todos.id
            let title = todos.title
            let row = `<tr><td>${todoId}</td><td>${title}</td></tr>`
            userDataTable.innerHTML += row
        })
    }

    const fetchAll = () => {
        axios.all( 
            [
                axios.get(BaseURL + users + `/${userId}/posts`),
                axios.get(BaseURL + users + `/${userId}/albums`),
                axios.get(BaseURL + `posts/${userId}/comments`),
                axios.get(BaseURL + `albums/${userId}/photos`),
                axios.get(BaseURL + users + `/${userId}/todos`)
            ]
        )
            .then (response=>{

                const posts = response[0].data
                appendPosts(posts) 

                const albums = response[1].data
                appendAlbums(albums)

                const comments = response[2].data
                appendComments(comments) 

                const photos = response[3].data
                appendPhotos(photos) 

                const todos = response[4].data
                appendTodos(todos)

            }).catch(error=>console.log(error))
    }

    fetchAll()

}


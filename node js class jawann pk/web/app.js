const START_POINT_URL = 'http://localhost:5000/'
let signIn = document.getElementById('signIn')
let signUp = document.getElementById('signUp')

// signUp
let emailSignUp = document.getElementById('emailSignUp')
let passwordSignUp = document.getElementById('passwordSignUp')

// signIn
let emailSignIn = document.getElementById('emailSignIn')
let passwordSignIn = document.getElementById('passwordSignIn')

// addTodo
let todoName = document.getElementById('todoName')

// getAllTodo
let list = document.getElementById('list')

async function submitSignUpBtn() {
    let data = {
        email: emailSignUp.value,
        password: passwordSignUp.value
    }
    axios.post(`${START_POINT_URL}auth/signup`, data)
        .then(function (response) {
            if (response?.status === 201) {
                console.log(response.statusText)
                document.getElementById('signUp').style.display = 'none'
                document.getElementById('signIn').style.display = 'block'
            } else if (response?.status === 200) {
                console.log(response.data.message)
            }
        })
        .catch(function (error) {
            if (error.response.status) {
                console.log('error', error.response.statusText);
            }
        });
}

async function submitSignInBtn() {
    let data = {
        email: emailSignIn.value,
        password: passwordSignIn.value
    }

    axios.post(`${START_POINT_URL}auth/signin`, data)
        .then(function (response) {
            if (response?.status === 200) {
                console.log(response.data.message)
                document.getElementById('signIn').style.display = 'none'
                document.getElementById('main2').style.display = 'block'
                document.getElementById('todo').style.display = 'block'
                getAllTodo()
            }
        })
        .catch(function (error) {
            console.log('error', error)
            if (error.response.status) {
                console.log('error=>', error.response.statusText);
            }
        });
}

async function addTodoBtn() {
    let data = {
        todoName: todoName.value
    }
    axios.post(`${START_POINT_URL}user/todoAdd`, data)
        .then(function (response) {
            if (response?.status === 201) {
                console.log(response.data.message)
                document.getElementById('main2').style.display = 'block'
                getAllTodo()
            }
        })
        .catch(function (error) {
            console.log('error', error)
            if (error.response.status) {
                console.log('error=>', error.response.statusText);
            }
        });

}

async function getAllTodo() {
    axios.get(`${START_POINT_URL}user/getAllTodo`)
        .then(function (response) {
            // handle success
            console.log(response);
            for (let i = 0; i < response.data.data.length; i++) {
                var li = document.createElement('li')
                var liTxt = document.createTextNode(response?.data?.data[i]?.todoName)
                li.appendChild(liTxt)
                list.appendChild(li)
            }
        })
        .catch(function (error) {
            // handle error
            console.log('error', error);
        })
   
}
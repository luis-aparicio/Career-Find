const updateBackEnd = (property, content) => {

        //calls update post to change user attribute
        //will work for any property of UserModel
        let data = {
            username:localStorage.getItem("user"),
            property: property,
            content: content
        };

        let response = await axios.post('/api/user/profile/update', data);
        if(!response.includes('ERROR')){
            localStorage.setItem(property, content);
            console.log(property + ' = ' + content);
        }else{
            console.log('Error updating' + property);
        }

    }
}
export default updateBackEnd;
///////////////Favorite functions for individual careers
//Handles favorite button look, click, updating favorites in global state and updating in the database
//////////////////
import React, {useContext, useEffect} from 'react';
import { Container, Button } from 'react-bootstrap';
import { globalState } from "../../state/globalState";


const FavoriteButton = (props) => {

    const globalStateVars = React.useContext(globalState);
    const { dispatch } = globalStateVars;
    let currFavorites = globalStateVars.state.favorites;
    let newFavorites = currFavorites;

    useEffect(() => {
        let mounted = true;
        if (props.careername) {
          if(mounted && currFavorites != newFavorites){
                dispatch({ type:'update_favorites', payload: {favorites:currFavorites} });
                currFavorites = newFavorites;
            }
        }
        return () => mounted = false;

    }, [currFavorites]);
    
    const handleClick = (favorite) => {
        console.log(props.isFavorite);
        if(favorite) {//already a favorite, un-favorite on click
            console.log("favorite removed");
            for(let i in newFavorites) {
                if(newFavorites[i] === props.careername) {
                    newFavorites.splice(i,1);
                    //add code here to update back end
                }
            }
            props.setIsFavorite(false); //in case problem finding
        } else {
            console.log("favorites" + newFavorites);
            console.log ("career: " + props.careername);
            newFavorites.push(props.careername);
            props.setIsFavorite(true);
        }
        //update global state var
    };

    for(let i in newFavorites) {
        let found = false;
        if(newFavorites[i] === props.careername){
            props.setIsFavorite(true);
            found = true;
        }
        if(found === false)
            props.setIsFavorite(false);
    }

    console.log('fav=' + props.isFavorite);
    return(
        <div>
            <Container>
                <Button
                    action onClick = {handleClick([props.isFavorite])}>
                    { props.isFavorite ? 'Remove Favorite' : 'Add Favorite'}
                </Button>
            </Container>
        </div>
    );
};
export default FavoriteButton;
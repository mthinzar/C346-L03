import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Movie from './components/Movie';

class AllMovies extends React.Component {
  render() {
    return (
        <ScrollView>
            <Movie title={"Doctor Sleep"} year={2019} icon_name={"skull"} icon_color={"red"}
            poster={require("./img/doctor-sleep.jpg")}/>

            <Movie title={"Midway"} year={2020} icon_name={"person-rifle"} icon_color={"grey"}
            poster={require("./img/midway.jpg")}/>

            <Movie title={"Perfect Cat"} year={2026} icon_name={"cat"} icon_color={"purple"}
                   poster={{uri:"https://i.pinimg.com/736x/e0/ec/7c/e0ec7cb0f448abe5c210e5cd47af35cb.jpg"}}/>

        </ScrollView>
    )
  }
}

export default AllMovies;

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    SafeAreaView,
    Image,
    TextInput,
    Text,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import * as HomeActions from './../../store/actions/HomeActions/HomeActions';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import UserComponent from '../../components/UserComponent';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
            filteredData: []
        };
    }
    componentDidMount = async () => {
        this.fetchData()
    }

    fetchData = () => {
        const { actions } = this.props;
        actions.home.getUsersList()
            .then(res => {
                this.setState({ data: res, loading: false })
            })
            .catch(err => {
                console.log(err, "inscren")
            })
    }

    searchUser = (searchText) => {
        const { list } = this.props
        this.setState({ searchText: searchText });
        let filteredData = list.filter(function (item) {
            const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            const textData = searchText.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({ filteredData: filteredData });
    };
    onPressUser = (item) => {
        console.log(item, "item")
        const { navigation } = this.props
        navigation.navigate('DetailPage', {
            user: item
        })
    }


    render() {
        const { list } = this.props
        const { loading } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                {/* <ScrollView> */}
                {
                    loading ?
                        (
                            <View style={{ paddingTop: 50 }}>
                                <ActivityIndicator size="small" color="#0000ff" />
                            </View>
                        )
                        :
                        (
                            <View style={styles.subContainer}>
                                <View style={{ padding: 10 }}>
                                    {
                                        list &&
                                        (
                                            <>
                                                <View style={styles.textInputContainer}>
                                                    <TextInput style={styles.inputContainer}
                                                        placeholderTextColor="#4f4d4d"
                                                        placeholder="  Search User"
                                                        onChangeText={(val) => {
                                                            this.searchUser(val);
                                                        }}>
                                                    </TextInput>
                                                </View>
                                                <FlatList
                                                    data={this.state.filteredData && this.state.filteredData.length > 0 ?
                                                        this.state.filteredData : this.state.data}
                                                    renderItem={({ item }) =>
                                                        <UserComponent
                                                            onPress={() => this.onPressUser(item)}
                                                            name={item.name}
                                                            img={item.profile_image}
                                                            email={item.email}
                                                        />}
                                                    keyExtractor={item => item.id}
                                                    showsHorizontalScrollIndicator={false}
                                                    showsVerticalScrollIndicator={false}
                                                />
                                            </>
                                        )
                                    }
                                </View>
                            </View>

                        )
                }
                {/* </ScrollView> */}
            </SafeAreaView>
        );
    }
}
const mapStateToProps = state => ({
    list: state.homeReducer.list

})
const mapDispatchToProps = dispatch => {
    return {
        actions: {
            home: bindActionCreators(HomeActions, dispatch),
        },
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(HomeScreen);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F6FC',
    },
    subContainer: {
        flex: 1,
        paddingBottom: 50
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: colors.primaryColor,
    },
    titleStyle: {
        // color: colors.whiteTextColor,
        fontSize: 20,
    },
    subTitleStyle: {
        // color: colors.whiteTextColor,
        fontSize: 14,
    },
    textcontainer: {
        padding: 10,
    },
    textInputContainer: {
        height: 50,
        backgroundColor: "#ebebeb",
        borderRadius: 6,
        marginVertical: 15,
        borderColor: "grey"

    },
    inputContainer: {
        height: "100%",
        width: "100%",

    }
});

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
import LocalData from './../../config/LocalStorage'
import { Dropdown, } from 'react-native-element-dropdown';
import PrimaryButton from '../../components/common/PrimaryButton';
import * as authActions from '../../store/actions/AuthActions/AuthActions';
import {CommonActions} from '@react-navigation/native';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
            filteredData: [],
            genreData: [
                { label: 'Thriller', value: '1' },
                { label: 'children', value: '2' },
                { label: 'Suspense', value: '3' },
                { label: 'Drama', value: '4' },
            ],
            selectedData: null,

        };
    }
    componentDidMount = async () => {
        this.fetchData()
    }

    fetchData = async () => {
        const { actions } = this.props;
        let userData = await LocalData.getData()
        actions.home.getFilmsList(userData)
            .then(res => {
                this.setState({ loading: false })
            })
            .catch(err => {
                console.log(err, "inscren")
            })
    }

    _renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };
    setValue = async (val) => {
        const { actions } = this.props;
        let userData = await LocalData.getData()
        actions.home.getFilmsListByGenre(val, userData)

    }
    handleLogOut = async () => {
        const { actions, navigation } = this.props;
        await actions.auth.signOut()
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [{ name: 'Auth' }],
            }),
        );
    }


    render() {
        const { list } = this.props
        const { loading, genreData, selectedData } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
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
                                        <Dropdown
                                            style={styles.dropdown}
                                            containerStyle={styles.shadow}
                                            data={genreData}
                                            search
                                            searchPlaceholder="Search"
                                            labelField="label"
                                            valueField="value"
                                            label="Dropdown"
                                            placeholder="Select item"
                                            value={selectedData}
                                            onChange={item => {
                                                this.setValue(item.value)
                                            }}
                                            renderItem={item => this._renderItem(item)}
                                            textError="Error"
                                        />
                                        {
                                            list &&
                                            (
                                                <FlatList
                                                    data={list}
                                                    renderItem={({ item }) =>
                                                        <UserComponent
                                                            // onPress={() => this.onPressUser(item)}
                                                            title={item.title}
                                                            genre={item.genre}
                                                            description={item.description}
                                                        />}
                                                    keyExtractor={item => item.id}
                                                    showsHorizontalScrollIndicator={false}
                                                    showsVerticalScrollIndicator={false}
                                                />
                                            )
                                        }
                                        <PrimaryButton
                                            title="LogOut"
                                            style={styles.butonContainer}
                                            color={['#2B3FD9', '#E344D7']}
                                            txtStyle={styles.buttonText}
                                            onPress={() => this.handleLogOut()}
                                        />
                                    </View>
                                </View>
                            )
                    }
                </ScrollView>
            </View>
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
            auth: bindActionCreators(authActions, dispatch),
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
    },
    titleStyle: {

        fontSize: 20,
    },
    subTitleStyle: {

        fontSize: 14,
    },
    textcontainer: {
        padding: 10,
    },
    textInputContainer: {
        height: 50,
        backgroundColor: "#ebebeb",
        borderRadius: 6,
        justifyContent: "center",
        borderColor: "grey",
        marginTop: 10
    },
    inputContainer: {
        height: "100%",
        width: "100%",
    },
    dropdown: {
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        marginTop: 20,
    },
    butonContainer: {
        justifyContent: 'center',
        height: 53,
        borderRadius: 15,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        alignSelf: 'center',
    },
});

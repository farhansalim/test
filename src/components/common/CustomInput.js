import React from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';

import { TextField } from 'react-native-material-textfield';


const CustInput = props => {
    const { label, error, onChange, value, fontStyle, containerStyle, secureTextEntry, eyeIcon, onIconPress, iconName, ...rest } = props;
    return (
        <View style={[styles.container, containerStyle]}>
            {/* <View style={{marginBottom:-5}}> */}
            <TextField
                label={label}
                value={value}
                onChangeText={onChange}
                lineWidth={0.3}
                labelFontSize={11, fontStyle}
                activeLineWidth={1.5}
                textColor="#333333"
                tintColor="#2B2B2B"
                baseColor="#989898"
                secureTextEntry={secureTextEntry}
                {...rest}
            />
            {iconName && (
                <TouchableOpacity onPress={onIconPress} style={{ position: 'absolute', right: 20, top: 35 }}>
                    <Icon
                        name={iconName}
                        size={18} color="#c7c7c7" />
                </TouchableOpacity>
            )
            }
            {/* </View> */}
      
        </View>
    );
};

export default CustInput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -1,
    },


});

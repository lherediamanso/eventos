import React, { useState } from 'react';
import { Formik } from 'formik';

import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import BouncyCheckboxGroup, {
    ICheckboxButton,
} from "react-native-bouncy-checkbox-group";

//React navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackPramList } from "../../App"

const _iconStyle = (borderColor: string) => ({
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: borderColor,
});

const styles = StyleSheet.create({
    container: { marginTop: 24 },
    verticalStyle: { marginTop: 16 },
    textStyle: { textDecorationLine: "none" },
    iconImageStyle: { height: 20, width: 20 },
    appContainer: {
        flex: 1,
    },
    formContainer: {
        margin: 8,
        padding: 8,
    },
    title: {
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 15,
    },
    subTitle: {
        fontSize: 26,
        fontWeight: '600',
        marginBottom: 2,
    },
    description: {
        color: '#758283',
        marginBottom: 8,
    },
    heading: {
        fontSize: 15,
    },
    inputWrapper: {
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    inputColumn: {
        flexDirection: 'column',
    },
    inputStyle: {
        padding: 8,
        width: '30%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#16213e',
    },
    errorText: {
        fontSize: 12,
        color: '#ff0d10',
    },
    formActions: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    primaryBtn: {
        width: 120,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: '#5DA3FA',
    },
    primaryBtnTxt: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
    secondaryBtn: {
        width: 120,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: '#CAD5E2',
    },
    secondaryBtnTxt: {
        textAlign: 'center',
    },
    card: {
        padding: 12,
        borderRadius: 6,
        marginHorizontal: 12,
    },
    cardElevated: {
        backgroundColor: '#ffffff',
        elevation: 1,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    generatedPassword: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 12,
        color: '#000'
    },
});

const staticData: ICheckboxButton[] = [
    {
        id: 1,
        fillColor: "#fc0000",
        unfillColor: "#ff3333",
        iconStyle: _iconStyle("#fc0000"),
        iconImageStyle: styles.iconImageStyle,
    },
    {
        id: 2,
        fillColor: "#f7883c",
        unfillColor: "#f96906",
        iconStyle: _iconStyle("#f7883c"),
        iconImageStyle: styles.iconImageStyle,
    },
    {
        id: 3,
        fillColor: "#f9de30",
        unfillColor: "#fbd901",
        iconStyle: _iconStyle("#f9de30"),
        iconImageStyle: styles.iconImageStyle,
    },
    {
        id: 4,
        fillColor: "#c1fc39",
        unfillColor: "#affb01",
        iconStyle: _iconStyle("#c1fc39"),
        iconImageStyle: styles.iconImageStyle,
    },
    {
        id: 5,
        fillColor: "#4efc39",
        unfillColor: "#20f906",
        iconStyle: _iconStyle("#4efc39"),
        iconImageStyle: styles.iconImageStyle,
    },
];

type FormCommentsProps = NativeStackScreenProps<RootStackPramList, "FormComments">


const FormComments = ({ navigation }: FormCommentsProps) => {
    const horizontalCheckboxGroupContainer = () => (
        <>
            <View style={{  }}>
                <Text style={{ color: "#a8a8ac", fontWeight: "500", fontSize: 16 }}>
                    Califica el evento (rojo: Malo, Verde: Bueno)
                </Text>
            </View>
            <View
                style={{
                    marginTop: 16,
                    marginBottom: 16,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <BouncyCheckboxGroup
                    data={staticData}
                    onChange={(selectedItem: ICheckboxButton) => {
                        console.log("SelectedItem: ", JSON.stringify(selectedItem));
                    }}
                />
            </View>
        </>
    );

    const generatePasswordString = (passwordLength: number) => {
    }

    return (
        <>
            <SafeAreaView>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Adicionar Comentario</Text>
                    {/* COMPONENTE FORMIK */}
                    <Formik
                        initialValues={{ passwordLength: '' }}
                        onSubmit={(values) => {
                            generatePasswordString(Number(values.passwordLength))
                            console.log(values)
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            isValid,
                            handleChange,
                            handleSubmit,
                            handleReset,
                            /* and other goodies */
                        }) => (
                            <>
                                <View style={styles.inputWrapper}>
                                    <View style={styles.inputColumn}>
                                        <Text style={styles.heading}>Longitud Password</Text>
                                    </View>
                                </View>
                                <TextInput
                                    style={styles.inputStyle}
                                    value={values.passwordLength}
                                    onChangeText={handleChange('passwordLength')}
                                    placeholder='0'
                                    keyboardType='default'
                                />

                                <View style={styles.container}>
                                    {horizontalCheckboxGroupContainer()}
                                </View>
                                <textarea
                                    name='comentario'
                                    style={styles.inputStyle}
                                    placeholder='0'
                                />

                                {/* BOTONES */}

                                <View style={styles.formActions}>
                                    <TouchableOpacity
                                        style={styles.primaryBtn}
                                        disabled={!isValid}
                                        onPress={handleSubmit}
                                    >
                                        <Text style={styles.primaryBtnTxt}>Generar Password</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.secondaryBtn}
                                        onPress={() => {
                                            handleReset();
                                            resetPasswordState()
                                        }}
                                    >
                                        <Text style={styles.secondaryBtnTxt}>Reset</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </Formik>
                    {/* COMPONENTE FORMIK */}
                </View>
            </SafeAreaView>
        </>
    );
};

export default FormComments;

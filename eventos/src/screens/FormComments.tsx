import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
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
    // Pagina
    formContainer: {
        margin: 8,
        padding: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
        alignSelf: 'center'
    },
    heading: {
        fontSize: 15,
    },
    // Formulario
    inputWrapper: {
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    //Input Nombre
    inputColumn: {
        flexDirection: 'column',
    },
    inputStyle: {
        padding: 8,
        width: '100%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#16213e',
    },
    // Estilos del checkbox
    container: { marginTop: 24 },
    verticalStyle: { marginTop: 16 },
    textStyle: { textDecorationLine: "none" },
    iconImageStyle: { height: 20, width: 20 },
    //Input Nombre
    textAreaStyle: {
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#16213e',
        marginBottom: 10
    },
    // Botones
    formActions: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    primaryBtn: {
        width: 120,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: '#065CC6',
    },
    primaryBtnTxt: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
    hiddenInput: {
        width: 0,
        height: 0,
    },
});

const optionsCalifica: ICheckboxButton[] = [
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

var calificaSelected: string | number = null

const FormComments = ({ navigation, route }: FormCommentsProps) => {

    const { event } = route.params

    const [coment1, setComment] = useState(
        event
    )

    const horizontalCheckboxGroupContainer = () => (
        <>
            <View>
                <Text style={styles.heading}>
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
                    data={optionsCalifica}
                    onChange={(selectedItem: ICheckboxButton) => {
                        calificaSelected = selectedItem.id
                        console.log("Seleccionado: ", JSON.stringify(selectedItem));
                    }}
                />
            </View>
        </>
    );

    const guardarComentario = (evento: Eventos, nombre: string, califica: string | number, comentario: string) => {
        console.log('nom', nombre)
        console.log('cal', califica)
        console.log('com', comentario)

        let comentarioObj = {
            id: '4',
            name: nombre,
            calificacion: Number(califica),
            comentario: comentario
        };
        console.log(evento)
        console.log(comentarioObj);

        
    }

    //Validaciones del formulario
    const validationSchema = Yup.object().shape({
        nombre: Yup.string()
            .required('')
            .min(3, ''),
        comentario: Yup.string()
            .required('')
            .min(10, ''),
    });


    return (
        <>
            <SafeAreaView>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Adicionar Comentario</Text>
                    {/* COMPONENTE FORMIK */}
                    <Formik
                        initialValues={{
                            nombre: '',
                            califica: '',
                            comentario: ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            guardarComentario(event, String(values.nombre), calificaSelected, String(values.comentario))
                            //console.log(values)
                            //console.log('califica', calificaSelected)
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            isValid,
                            handleChange,
                            handleSubmit,
                        }) => (
                            <>
                                <View style={styles.inputWrapper}>
                                    <View style={styles.inputColumn}>
                                        <Text style={styles.heading}>Nombre</Text>
                                    </View>
                                </View>
                                <TextInput
                                    style={styles.inputStyle}
                                    value={values.nombre}
                                    onChangeText={handleChange('nombre')}
                                    placeholder='Nombre'
                                    placeholderTextColor="#878787"
                                    keyboardType='default'
                                    error={errors.nombre}
                                />

                                <View style={styles.container}>
                                    {horizontalCheckboxGroupContainer()}
                                </View>

                                <View style={styles.inputWrapper}>
                                    <View style={styles.inputColumn}>
                                        <Text style={styles.heading}>Comentario</Text>
                                    </View>
                                </View>
                                <textarea
                                    name='comentario'
                                    style={styles.textAreaStyle}
                                    placeholder='Comentario'
                                    value={values.comentario}
                                    onChange={handleChange('comentario')}
                                    rows="5"
                                />

                                {/* BOTONES */}

                                <View style={styles.formActions}>
                                    <TouchableOpacity
                                        style={styles.primaryBtn}
                                        disabled={!isValid}
                                        onPress={handleSubmit}
                                    >
                                        <Text style={styles.primaryBtnTxt}>Enviar</Text>
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

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{

        flexDirection: 'row',
        width: '100%', 
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10
    },

    name:{ 

        color: '#FFF',
        flex: 1,
        fontSize: 16,
        marginLeft: 16
    },

    button:{

        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textButton:{

        fontSize: 18,
        color: '#FFF'
    }
})

import { Text, View } from "react-native";

type welcomeProps = {
    name:string,
    age:number,
    gender:boolean
}

export default function welcome(props: welcomeProps){
    return(

        <View>
            <image />
        <Text>Nome: {props.name}!</Text>
        <Text>Idade: {props.age}.</Text>
        <Text>Genero: {props.gender ? "homem":"mulher"}.</Text>
        </View>
    )
}
import React, {Component} from 'react';
import {Platform,TouchableOpacity, StyleSheet,Image, Text, View} from 'react-native';


export default class Cronometro extends Component {

constructor(props){
  super(props);
  this.state={numero:0, botao:'Iniciar'};
  this.timer=null;
  this.iniciar= this.iniciar.bind(this);
  this.limpar= this.limpar.bind(this);
}

 iniciar(){
   let s = this.state;

     if(this.timer !=null){
       //parar o time
        clearInterval(this.timer);
        this.timer = null;

        s.botao="Iniciar";
     }else{
       this.timer= setInterval(()=>{
         let s= this.state;
         s.numero += 0.1;

         this.setState(s);
       },100);

       s.botao="Parar";
     }

     this.setState(s);
 }


 limpar(){
  if(this.timer !=null){
    //parar o time
     clearInterval(this.timer);
     this.timer = null;
 }
   let s = this.state;
   s.numero=0;
   s.botao='Iniciar';
   this.setState(s);
}


  render() {
    return (
      <View style={styles.container}>
         <Image source={require('../img/relogio.png')} />
         <Text style={styles.timer}> {this.state.numero}</Text>
          <View style={styles.botaoArea}>
               <TouchableOpacity  style={styles.botao} onPress={this.iniciar}>
                 <Text style={styles.textBotao}> {this.state.botao}</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.botao} onPress={this.limpar}>
                 <Text style={styles.textBotao}> Limpar</Text>
                </TouchableOpacity>

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:310,
    justifyContent:'center',
    alignItems: 'center',

  },
  timer:{
      color: '#baa07a',
      fontSize:80,
      fontWeight:'bold',
      marginTop: -158,
      marginLeft:-15,
  },
  botaoArea:{
    flexDirection:'row',
    height:60,
    marginTop:80,
  },
  botao:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#886532',
    borderRadius: 5,
    margin: 10,

  },
  textBotao:{
     fontSize:17,
     fontWeight:'bold',
     color: '#FFFFFF',
  }
});

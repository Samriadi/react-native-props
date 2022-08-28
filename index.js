const Greeting = (props) => {
  return (
    <View>
      <Text>Hello {props.name}</Text>
    </View>
  )
}

const index = () => {
  return (
    <View>
      <Greeting name="Baso"/>
    </View>
  )
};

export default index;

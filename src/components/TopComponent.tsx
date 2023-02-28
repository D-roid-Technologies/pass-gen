import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const TopComponent: React.FC<any> = ({textU}) => {
    return(
        <SafeAreaView>
            <View
        style={{
          height: 80,
          backgroundColor: "#00008B",
          justifyContent: "center",
          alignItems: "center",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <Text style={{ color: "#FFDB51", fontSize: 18, fontWeight: "600" }}>
          {textU}
        </Text>
      </View>
        </SafeAreaView>
    )
}

export default TopComponent
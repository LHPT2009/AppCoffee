import React from 'react';
import { View,Text } from 'react-native';
const Purchase = ({route}) => {
    return (
        <View>
            <Text>Lịch sử đơn hàng của {route.params.name}</Text>
        </View>
    )
};
export default Purchase;
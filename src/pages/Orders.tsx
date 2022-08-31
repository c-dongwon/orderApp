import React, { useCallback } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { Order } from '../slices/order';

const Orders = () => {
    const orders = useSelector((state: RootState) => state.order.orders);

    const renderItem = useCallback(({ item }: { item: Order }) => {
        return (
            <View>
                <View>
                    <Text>{item.orderId}</Text>
                </View>
            </View>
        );
    }, []);

    return (
        <>
            <FlatList data={orders} keyExtractor={(item) => item.orderId} renderItem={renderItem} />
        </>
    );
};

export default Orders;

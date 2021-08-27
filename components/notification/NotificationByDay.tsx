import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import NoticationItem from "./NoticationItem";

type INotificationByDay = {
  date: string;
  dayOfWeek: string;
  items: {
    isRead: boolean;
  }[];
};

interface Props {
  data: INotificationByDay;
}

const NotificationByDay: React.FC<Props> = ({ data }) => {
  const day = data.date.split("-")[1];

  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flexDirection: "row", marginRight: 8 }}>
        <View style={{ marginTop: 10, marginRight: 10, alignItems: "center" }}>
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 100,
              backgroundColor: day === "13" ? Colors.primary : Colors.secondary,
            }}
          />
          <View
            style={{
              flex: 1,
              width: 1,
              marginVertical: 10,
              backgroundColor: day === "13" ? Colors.primary : Colors.secondary,
            }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontFamily: "inter-bold" }}>{day}</Text>
          <Text style={{ textTransform: "uppercase" }}>{data.dayOfWeek}</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={data.items}
          ItemSeparatorComponent={() => <View style={{ marginVertical: 6 }} />}
          renderItem={() => {
            return <NoticationItem />;
          }}
          keyExtractor={(item, idx) => idx.toString()}
        />
      </View>
    </View>
  );
};

export default NotificationByDay;

const styles = StyleSheet.create({});

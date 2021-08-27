import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import { RootTabScreenProps } from "../../types";
import NoticationItem from "../../components/notification/NoticationItem";
import NotificationByDay from "../../components/notification/NotificationByDay";

interface Props extends RootTabScreenProps<"Notification"> {}

const Notification: React.FC<Props> = () => {
  const [items, setItems] = useState([
    {
      date: "Aug-13",
      dayOfWeek: "Mon",
      items: [{ isRead: false }, { isRead: false }],
    },
    {
      date: "Aug-12",
      dayOfWeek: "Sun",
      items: [{ isRead: true }],
    },
    {
      date: "Aug-11",
      dayOfWeek: "Sat",
      items: [{ isRead: true }, { isRead: true }],
    },
    {
      date: "Aug-10",
      dayOfWeek: "Fri",
      items: [{ isRead: true }, { isRead: true }],
    },
  ]);

  return (
    <Container
      style={styles.container}
      background={Colors.background}
      isScrollable
      additionalPaddingTop={0}
    >
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Notifications</Text>
      </View>
      <View style={styles.innerContainer}>
        <FlatList
          data={items}
          ItemSeparatorComponent={() => <View style={{ marginVertical: 6 }} />}
          renderItem={({ item }) => (
            <NotificationByDay key={item.date} data={item} />
          )}
        />
      </View>
    </Container>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    width: Layout.window.width,
    height: Layout.window.height / 5 + 50,
    backgroundColor: Colors.background,
  },
  innerContainer: {
    paddingHorizontal: 28,
    flex: 1,
    minHeight: Layout.window.height - Layout.window.height / 4,
    marginTop: -50,
    paddingTop: 72 - 18,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
  },
  title: {
    fontSize: 32,
    fontFamily: "poppins-bold",
    color: Colors.white,
    textAlign: "center",
  },
});

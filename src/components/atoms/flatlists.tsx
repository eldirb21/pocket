import {
    FlatList,
    FlatListProps,
    ScrollView,
    ScrollViewProps,
    StyleSheet,
    View,
    ViewProps,
  } from "react-native";
  import React, { ReactNode } from "react";
  
  // Tipe untuk renderItem di FlatList
  type FlatListRenderItem<T> = (info: { item: T; index: number }) => React.ReactElement<any, any> | null;
  
  // Tipe untuk renderItem di ScrollView
  type ScrollViewRenderItem<T> = (info: { item: T; index: number }) => React.ReactElement<any, any> | null;
  
  // Props yang diterima oleh Flatlists
  type Props<T> = {
    data?: T[];
    renderItem?: FlatListRenderItem<T>;
    keyExtractor?: (item: T) => string;
    scrollProps?: Omit<ScrollViewProps, 'children'>;
    children?: ReactNode;
    scrolView?: boolean;
  } & ViewProps;
  
  const Flatlists = <T,>({
    data,
    renderItem,
    keyExtractor,
    scrollProps,
    children,
    scrolView = false,
    ...rest
  }: Props<T>) => {
    if (scrolView) {
      return (
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          {...scrollProps}
          {...rest}
        >
          {data?.map((item, index) => (
            renderItem ? renderItem({ item, index }) : null
          ))}
        </ScrollView>
      );
    }
  
    return (
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={data}
        renderItem={renderItem as FlatListRenderItem<T>}
        keyExtractor={keyExtractor}
        ListHeaderComponent={children ? <View>{children}</View> : undefined}
        {...rest}
      />
    );
  };
  
  export default Flatlists;
  
  const styles = StyleSheet.create({});
  
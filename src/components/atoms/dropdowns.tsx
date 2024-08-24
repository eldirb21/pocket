import React from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {DropdownProps} from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';
import {scale, verticalScale} from '@constants';
import Icons from './icons';

type DropdownItem = {
  label: string;
  value: string;
};
type Props = DropdownProps<DropdownItem | any> & {
  data?: {label?: string; value?: string}[]; // Definisi bentuk data dropdown
  onChange?: (item?: any) => void;
};
const Dropdowns: React.FC<Props> = ({data, onChange = () => {}, ...res}) => {
  return (
    <Dropdown
      data={data}
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      maxHeight={scale(300)}
      placeholder="Select item"
      searchPlaceholder="Search..."
      onChange={onChange}
      renderRightIcon={() => (
        <Icons
          type="AntDesign"
          style={styles.icon}
          color="black"
          name="Safety"
          size={20}
        />
      )}
      {...res}
    />
  );
};

export default Dropdowns;

const styles = StyleSheet.create({
  dropdown: {
    height: verticalScale(40),
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

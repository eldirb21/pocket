import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import Texts from './texts';
import NetworkLogger from 'react-native-network-logger';
import Icons from './icons';
import Drag from './drag';
import {heightDimension, scale, verticalScale} from '@constants';

const NetworkDebug = () => {
  const [showDebugger, setShowDebugger] = useState(false);
  const [hideText, sethideText] = useState(false);
  const [height, setheight] = useState(verticalScale(200));

  const handleDebugShow = () => setShowDebugger(!showDebugger);

  const handlePosition = () => sethideText(!hideText);

  return (
    <>
      <Drag
        renderText={<View
          style={[
            styles.toast,
            styles.shadow,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              width: hideText ? scale(80) : scale(27),
              backgroundColor: hideText ? 'green' : 'transparent',
            },
          ]}>
          {hideText && (
            <TouchableOpacity
              onPress={handleDebugShow}
              style={styles.debugBtn}>
              <Texts style={styles.toastText}>Debug</Texts>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.arrow} onPress={handlePosition}>
            <Icons type="AntDesign" name="forward" color={'#FFF'} />
          </TouchableOpacity>
        </View>}
        debug
        y={30}
        z={5}
        x={10} isCircle={undefined} renderSize={undefined} imageSource={undefined} renderColor={undefined} children={undefined} shouldReverse={undefined} onReverse={undefined} disabled={undefined} animatedViewProps={undefined} touchableOpacityProps={undefined} onDrag={undefined} onShortPressRelease={undefined} onDragRelease={undefined} onLongPress={undefined} onPressIn={undefined} onPressOut={undefined} onRelease={undefined} minX={undefined} minY={undefined} maxX={undefined} maxY={undefined}      />
      {showDebugger && (
        <View style={{height}}>
          <TouchableOpacity
            style={[styles.fullDebug, styles.shadow]}
            onPress={() => {
              if (height <= verticalScale(200)) {
                setheight(heightDimension - 50);
              } else {
                setheight(verticalScale(200));
              }
            }}>
            <Icons
              type="SimpleLineIcons"
              name="size-fullscreen"
              size={20}
              color={'#000'}
            />
          </TouchableOpacity>
          <NetworkLogger compact theme={'light'} maxRows={10} />
        </View>
      )}
    </>
  );
};

export default NetworkDebug;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  toast: {
    flex: 1,
    height: scale(35),
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  toastText: {
    color: '#fff',
    textAlign: 'center',
  },
  debugBtn: {
    width: scale(50),
    borderRadius: 50,
    height: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  arrow: {
    backgroundColor: 'red',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  fullDebug: {
    position: 'absolute',
    zIndex: 99999,
    right: 10,
    bottom: 10,
    backgroundColor: '#FFF',
    padding: 5,
    borderRadius: 8,
  },
});

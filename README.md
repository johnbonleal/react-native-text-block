
# react-native-text-block

## Getting started

`$ npm install react-native-text-block --save`

### Mostly automatic installation

`$ react-native link react-native-text-block`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-text-block` and add `RNTextBlock.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNTextBlock.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNTextBlockPackage;` to the imports at the top of the file
  - Add `new RNTextBlockPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-text-block'
  	project(':react-native-text-block').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-text-block/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-text-block')
  	```


## Usage
```javascript
import RNTextBlock from 'react-native-text-block';

// TODO: What to do with the module?
RNTextBlock;
```
  
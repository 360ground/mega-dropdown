
# mega-dropdown  
  
Mega dropdown component with list  
  
  
## Features  
  
* Easy to use  
* Custom children support  
* Fancy out of the box ui  
* Consistent look and feel  
* Customizable style  
* Pure javascript implementation (with mega features of course)
  
## Installation  
  
```bash  
npm install --save mega-dropdown  
```  
  
## Usage  
  
```javascript  
import React, { Component } from 'react';  
import Dropdown from 'mega-dropdown';  
  
class Example extends Component {  
  render() {  
     return (  
		 <DropDown  
		  onListItemClicked={(item, index)=> alert(`You clicked item ${JSON.stringify(item)} at index ${index}` )}  
		  triggerComponent={ <Text>Hello there</Text>}  
		  title={"የክፍያ ቁጥር ይምረጡ"}  
		  data={[  
		        {title: "ሞባይል - 0922122763", icon: "phone", subtitle: "ጊዜ ከ ቀን 1 - 5"},  
		        {title: "መብራት - 0922122763", icon: "lightbulb", subtitle: "ጊዜ ከ ቀን 1 - 5"},  
		        {title: "ትራፊክ ቅጣት - 0922122763", icon: "traffic-light", subtitle: "ጊዜ ከ ቀን 1 - 5"},  
		        {title: "ትራፊክ ቅጣት - 0922122763", icon: "traffic-light", subtitle: "ጊዜ ከ ቀን 1 - 5"},  
		    ]}  
		  
	/>
 ); }}  
```  
  
## Properties  
  
 name              | description                                   | type     | default  
:----------------- |:--------------------------------------------- | --------:|:------------------  
 title             | Text label for the header                         |   String | -  
 data             | Array of items for the list                         |   Array | -  
 triggeringComponent | Component to open the dropdown            |   Node | _  
 onListItemClicked          | Click listener for the items on the list                         |   Function | _  
 children     | If you want to render custom component                     |   Node | _
    
  
## Example  
  
```bash  
git clone https://github.com/360ground/mega-dropdown
cd mega-dropdown/example/Demo  
npm install  
# Then open you meda app to debug 
```  
  
## Copyright and License  
  
MIT License  
  
Copyright 2020-2022 360ground. All rights reserved.

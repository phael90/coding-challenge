// const _ = require('lodash');
import _ from 'lodash';

const groupArrayElements = (elements, divider) => {
    const elementsDuplicate = _.cloneDeep(elements);

    if (!_.isInteger(divider) || !_.isArray(elementsDuplicate) || (divider <= 0)) return [];
    if (divider >= elementsDuplicate.length || divider === 1) return [elementsDuplicate];

    let numberOfArrays = Math.ceil(elementsDuplicate.length / divider);
    let finalArr = [];
  
    while (numberOfArrays > 0) {
        finalArr.push(elementsDuplicate.splice(0, divider))
        numberOfArrays--;
    };
    return finalArr;    
};

export default groupArrayElements;

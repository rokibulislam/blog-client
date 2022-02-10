import moment from 'moment';

export function getDate(timestamp) {
    const m =  moment(timestamp);
    const date = m.format('MMMM DD, YYYY');
    const time = m.format('h:mm A');
  
    return `${date} AT ${time}`;
}

export const insertReplyIntoComment = (arr, parent, reply) => {
    if(arr && Array.isArray(arr)) {
        arr.forEach(item => {
          if( item._id.toString() === parent.toString() ) {
            typeof item.children !== 'undefined' ? item.children.push(reply) : item.children = [reply]
          } else {
              insertReplyIntoComment(item.children, parent, reply)
          }
        });
    }

    
    return arr;
}; 
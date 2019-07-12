const Mock = require('mockjs');

// import Mock from 'mockjs';

// export default {
//     ['get /tokenw']: (req, res) =>
//         res.json(
//             Mock.mock({
//                 message: '@ctitle()',
//                 status: '1',
//                 'result|3': {
//                     pagesize: '@natural(10,20)',
//                     pageIndex: 10,
//                     'dataList|3-10': [{ id: '@guid()', age: '@natural(10,100)' }],
//                 },
//             }),
//         ),
// };

module.exports = {
    ['get /tokenw']: (req, res) =>
        res.json(
            Mock.mock({
                message: '@ctitle()',
                status: '1',
                'result|3': {
                    pagesize: '@natural(10,20)',
                    pageIndex: 1323,
                    'dataList|3-10': [{ id: '@guid()', age: '@natural(10,100)' }],
                },
            }),
        ),
};

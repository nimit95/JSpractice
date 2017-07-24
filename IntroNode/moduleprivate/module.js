

let privData = 'private data';

function privFunc() {
    console.log('this is private function');
}

module.exports = {
    publicVar :'this is public',
    publicFunc:function () {
        console.log('this is public function');
    },
    pirvateFunc : function() {
      privFunc();
    }
};
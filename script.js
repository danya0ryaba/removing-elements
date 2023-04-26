  function removeEveryOther(arr) {
            let my_arr = [];
            for (let i = 1; i <= arr.length; i = i + 2) {
                delete arr[i];
            }
            for (let item of arr) {
                if (typeof (item) != 'undefined') my_arr.push(item)
            }
            return my_arr
        }

const tree = [
    {
        v: 5,
        c: [
            {
                v:10,
                c: [
                    {
                        v:11,
                    }
                ]
            },
            {
                v:7,
                c: [
                    {
                        v:5,
                        c: [
                            {
                                v:1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v:10
            },
            {
                v:15
            }
        ]
    }
];


const recursive = (tree) => {
    let sum = 0;
    tree.forEach(item => {
        sum += item.v;
        console.log(sum);
        if (!item.c) {
            return item.v;
        }
        sum += recursive(item.c);
    });
    return sum;
};

console.log(recursive(tree));
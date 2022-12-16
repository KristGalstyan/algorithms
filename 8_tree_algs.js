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
        if (!item.c) {
            return item.v;
        }
        sum += recursive(item.c);
    });
    return sum;
};


const iteration = (tree) => {
    if (!tree.length) {
        return 0;
    }
    let sum = 0;
    let stack = [];
  tree.forEach(node => stack.push(node));
  while (stack.length) {
    const node = stack.pop();
    sum += node.v;
    if (node.c) {
        node.c.forEach(child => stack.push(child));
    }
  }
  return sum;
};

console.log(iteration(tree));
// console.log(recursive(tree));
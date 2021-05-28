const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey! it works');
        } else {
            reject('Whoops did`nt');
        }
    });
}

somethingWillHappen()
    .then(resolve => console.log(resolve))
    .catch(err => console.error(err));

const somethingWillhappend2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True!!!');
            }, 3000);
        } else {
            const error = new Error('Todo lo que pudo salir mal salió mal');
            reject(error);
        }
    });
}

Promise.all([somethingWillHappen(), somethingWillhappend2()])
    .then(resolve => {
        console.log('Array de results ', resolve);
    })
    .catch(err => {
        console.error(err);
    })
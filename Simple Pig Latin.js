function pigIt(str){
    return str.split(' ').map(w => w === '?' || w === '!' ? w : w.slice(1) + w.slice(0, 1) + 'ay').join(' ')
}

//Sorting Array of Objects

//string dari A ke Z (Ascending)
arrayku.sort(function(x,y)){
    if (x.nama < y.nama){return -1}
    if (x.nama > y.nama){return 1}
    return 0
})

//string dari Z ke A (Descending)
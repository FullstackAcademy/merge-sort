describe('Split Array function', function() {
    it('is returns undefined if the array is empty', function() {
      expect(split([])).toEqual(undefined)
    });

    it('returns the array if a single element array is passed', function() {
      expect(split([1])).toEqual([1])
    });

    it('splits an array into two halves', function() {
      expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]) 
    })

    it('splits an odd array into two arrays where the right is larger', function() {
        expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]])
    })
  });

  describe('Merge Function', function(){
      it('is able to merge two sorted arrays into one sorted array', function() {
            expect(merge([1],[2])).toEqual([1,2])  
            expect(merge([1,2], [3,4])).toEqual([1,2,3,4])
            expect(merge([5,8], [3,6])).toEqual([3,5,6,8])
      })

  })

  describe('mergeSort', function(){

    it ('sorts an empty array', function() {
        expect(mergeSort([])).toEqual([])
    })
    it('is able to split and merge sorted arrays', function() {
        expect(mergeSort([1,2,3])).toEqual([1,2,3])
        expect(mergeSort([5,4,3,2,1])).toEqual([1,2,3,4,5])
        expect(mergeSort([5,2,3,7,1])).toEqual([1,2,3,5,7])
      })     
  })
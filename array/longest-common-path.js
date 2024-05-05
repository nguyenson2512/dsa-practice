function longestCommonPath(conf1, conf2) {
  function getObjectPaths(obj, prefix = []) {
    return Object.entries(obj).flatMap(
      ([key, value]) =>
        typeof value === 'object' && value !== null ?
          getObjectPaths(value, [...prefix, key])
          : [[...prefix, key]]
    )
  }
  const paths1 = getObjectPaths(conf1)
  const paths2 = getObjectPaths(conf2)

  function getOverlap(path1, path2) {
    const minLength = Math.min(path1.length, path2.length);
    for (let i = 0; i < minLength; i++) {
      if (path1[i] !== path2[i]) {
        return path1.slice(0, i);
      }
    }
    return path1.slice(0, minLength);
  }

  let longestPath = [];
  let max = 0


  for (let path1 of paths1) {
    for (let path2 of paths2) {
      const overlap = getOverlap(path1, path2);
      if (overlap.length > max) {
        max = overlap.length;
        longestPath = overlap;
      } else if (overlap.length === max && overlap < longestPath) {
        longestPath = overlap
      }
    }
  }

  return longestPath.length > 0 ? longestPath.join('.') : '...'
}

const result = longestCommonPath(
  {
    a: 1,
    b: {
      c: {
        d: 2
      }
    }
  },
  {
    a: 1,
    b: {
      c: {
        d: {
          e: 3
        }
      }
    }
  },
)

console.log(result)
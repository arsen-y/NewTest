type Pair = [number | null, number | null]

type Course = {
    name: string,
    prices: Pair
}

type Courses = Array<Course>

// Список курсов
let courses: Courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
]

let requiredRange1: Pair = [null, 200];
let requiredRange2: Pair = [100, 350];
let requiredRange3: Pair = [200, null];

let filterCourses = (courses: Courses, requiredRange: Pair) => (courses.filter((item: Course) => ((item.prices[0] === null || requiredRange[0] === null || item.prices[0] >= requiredRange[0]) && (item.prices[1] == null || requiredRange[1] === null || item.prices[1] <= requiredRange[1]))))

console.log(filterCourses(courses, requiredRange1))
console.log(filterCourses(courses, requiredRange2))
console.log(filterCourses(courses, requiredRange3))

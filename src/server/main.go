package main
import (
"fmt"
"github.com/julienschmidt/httprouter"
"net/http"
"github.com/rs/cors"
"log"
"strconv"
)
func Index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
fmt.Fprint(w, "Welcome!\n")
}
func Fibonacci(n int)(int){
	if n <= 1 {
		return 0
	} 
	return Fibonacci(n-1) + Fibonacci(n-2)
}
func Converter(i int)([]int){
	seq := []int{1,2,3}
	return seq
}
func Sequence(w http.ResponseWriter, r *http.Request, ps httprouter.Params){
	if iterations, err := strconv.Atoi(ps.ByName("iterations")); err == nil {
		sendBack := Converter(iterations)
		fmt.Fprint(w, sendBack)
	} else { fmt.Println("Error")}
}
func main() {
router := httprouter.New()
handler := cors.Default().Handler(router)
router.GET("/api", Index)
router.GET("/api/sequence/:iterations", Sequence)
log.Fatal(http.ListenAndServe(":8080", handler))
}
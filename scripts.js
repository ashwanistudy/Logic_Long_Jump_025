
function del(){
    event.target.parentNode.parentNode.remove()
    document.getElementById("hamburger").style.opacity="1"
  }
  function hamburger() {
    document.getElementById("hamburger").style.opacity="0"
    let ham = document.createElement("div");
    ham.className = `ham`;
    
    ham.innerHTML = 
    `
    <div style="display: flex; justify-content: space-between;align-items: center; margin-top: 1rem;">
      <span style="font-weight: 700;">Select Algorithm</span> <span class="material-symbols-outlined" id="cl" onclick="del()">close</span></div>
    <a href="./algo_folder/Linked_List.html">Linked List</a>
    <a href="./algo_folder/Stack.html">Stack</a>
    <a href="./algo_folder/Queue.html">Queue</a>
    <a href="./algo_folder/Two_Pointer.html">Two pointer</a>
    <a href="./algo_folder/BinarySearch.html">BinarySearch</a>
    <a href="./algo_folder/Sliding_window.html">Sliding Window</a>
    <a href="./algo_folder/mergerSort.html">Merge Sort</a>
    <a href="./algo_folder/QuickSort.html">Quick Sort</a>
    <a href="./algo_folder/BubbleSort.html">Bubble Sort</a>
    <a href="./algo_folder/Selection_sort.html">Selection Sort</a>
    `;
    let body = document.querySelector("body").appendChild(ham);
  }

  document.getElementById("hamburger").addEventListener("click", hamburger);

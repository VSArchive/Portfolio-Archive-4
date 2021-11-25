---
title: "Recycler View in Kotlin"

date: 2021-11-25T13:00:00
url: /recycler-view-kotlin-android/
image: /images/thumbnails/recycler-view-kotlin.png
categories:
  - Android
tags:
  - Android
  - Kotlin
  - RecyclerView
---

To create a recycler view in kotlin you need three classes, an Adapter class to set data to items in the recycler view a data class to give your data a structure, and an activity or fragment class to display the view.

### Add dependencies

- Add the following dependencies to your build.gradle file

```gradle
implementation 'androidx.recyclerview:recyclerview:1.1.0'
implementation 'androidx.cardview:cardview:1.0.0'
```

### Write Code

- Create a data class, you can pass the variables you want to access later as parameters in the data class

```kotlin
data class Item(val text: String)
```

- Create an adapter class

```kotlin
class Adapter(private val List: List<Item>) : RecyclerView.Adapter<Adapter.ViewHolder>() {
    class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val text: TextView = view.findViewById(R.id.text)
        init {
            // You can add onClick Listeners here
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val item = LayoutInflater.from(parent.context).inflate(R.layout.item, parent, false)
        return ViewHolder(item)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val element = List[position]
        holder.text.text = element.text
    }

    override fun getItemCount(): Int {
        return List.size
    }
}
```

- Create an Activity where you want to display here I am feeding the view with dummy data you can add whatever data you want

```kotlin
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        view.adapter = Adapter(generateDummyList(1000))
        view.layoutManager = LinearLayoutManager(this)
        view.hasFixedSize()
    }

    private fun generateDummyList(size: Int): List<Item> {

        val list = ArrayList<Item>()

        for (i in 0 until size) {
            val item = Item("Item $i")
            list += item
        }
        return list
    }
}
```

**The entire code used is in the GitHub repo** — [https://github.com/vineelsai26/Recycler-View-Kotlin](https://github.com/vineelsai26/Recycler-View-Kotlin)

**Happy Coding!!!**

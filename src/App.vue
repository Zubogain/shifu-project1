<template>
    <main class="container">
        <nav>
            <div class="nav-wrapper">
                <aside>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/admin">Admin</router-link></li>
                    </ul>
                </aside>
            </div>
        </nav>
        <div class="card-panel grey lighten-5">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>
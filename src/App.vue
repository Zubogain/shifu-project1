<template>
    <main class="container">
        <nav>
            <div class="nav-wrapper">
                <aside>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <router-link to="/" tag="li"><a>Главная</a></router-link>
                        <router-link to="/admin" tag="li"><a>Администрирование</a></router-link>
                    </ul>
                </aside>
            </div>
        </nav>
        <div class="card-panel grey lighten-5 row">
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
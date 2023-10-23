const linkTeam = document.getElementById('link')
const linkCost = document.getElementById('link_cost')
const linkTransfer = document.getElementById('link_transfer')
const linkRating = document.getElementById('link_rating')
const linkRumor = document.getElementById('link_rumor')
const linkInterview = document.getElementById('link_interview')

const dropdown = document.getElementById('dropdown')
const dropCost = document.getElementById('dropdown_cost')
const dropTransfer = document.getElementById('dropdown_transfer')
const dropRating = document.getElementById('dropdown_rating')
const dropRumor = document.getElementById('dropdown_rumor')
const dropInterview = document.getElementById('dropdown_interview')

const header = document.getElementById('header-bar')

linkTeam.addEventListener('mouseover', function showDrop() {
    dropdown.classList.add('active')
    header.style.borderRadius = '0px'
})

dropdown.addEventListener('mouseover', () => {
    dropdown.classList.add('active')
    header.style.borderRadius = '0px'
})

linkTeam.addEventListener('mouseleave', () => {
    dropdown.classList.remove('active')
    header.style.borderRadius = '0px 0px 8px 8px'
})

dropdown.addEventListener('mouseleave', () => {
    dropdown.classList.remove('active')
    header.style.borderRadius = '0px 0px 8px 8px'
})



linkCost.addEventListener('mouseover', function showDrop() {
    dropCost.classList.add('active')
    header.style.borderRadius = '0px'
})

dropCost.addEventListener('mouseover', () => {
    dropCost.classList.add('active')
    header.style.borderRadius = '0px'
})

linkCost.addEventListener('mouseleave', () => {
    dropCost.classList.remove('active')
    header.style.borderRadius = '0px 0px 8px 8px'
})

dropCost.addEventListener('mouseleave', () => {
    dropCost.classList.remove('active')
    header.style.borderRadius = '0px 0px 8px 8px'
})


linkTransfer.addEventListener('mouseover', function showDrop() {
    dropTransfer.classList.add('active')
    header.style.borderRadius = '0px'
})

dropTransfer.addEventListener('mouseover', () => {
    dropTransfer.classList.add('active')
    header.style.borderRadius = '0px'
})

linkTransfer.addEventListener('mouseleave', () => {
    dropTransfer.classList.remove('active')
    header.style.borderRadius = '0px 0px 8px 8px'
})

dropTransfer.addEventListener('mouseleave', () => {
    dropTransfer.classList.remove('active')
    header.style.borderRadius = '0px 0px 8px 8px'
})


linkRating.addEventListener('mouseover', function showDrop() {
    dropRating.classList.add('active')
    header.style.borderRadius = '0px'
})

dropRating.addEventListener('mouseover', () => {
    dropRating.classList.add('active')
    header.style.borderRadius = '0px'
})

linkRating.addEventListener('mouseleave', () => {
    dropRating.classList.remove('active')
    header.style.borderRadius = '0px 0px 8px 8px'
})

dropRating.addEventListener('mouseleave', () => {
    dropRating.classList.remove('active')
    header.style.borderRadius = '0px 0px 8px 8px'
})


linkRumor.addEventListener('mouseover', function showDrop() {
    dropRumor.classList.add('active')
    header.style.borderRadius = '0px'
})

dropRumor.addEventListener('mouseover', () => {
    dropRumor.classList.add('active')
    header.style.borderRadius = '0px'
})

linkRumor.addEventListener('mouseleave', () => {
    dropRumor.classList.remove('active')
    header.style.borderRadius = '0px 0px 8px 8px'
})

dropRumor.addEventListener('mouseleave', () => {
    dropRumor.classList.remove('active')
    header.style.borderRadius = '0px 0px 8px 8px'
})


linkInterview.addEventListener('mouseover', function showDrop() {
    dropInterview.classList.add('active')
    header.style.borderRadius = '0px'
})

dropInterview.addEventListener('mouseover', () => {
    dropInterview.classList.add('active')
    header.style.borderRadius = '0px'
})

linkInterview.addEventListener('mouseleave', () => {
    dropInterview.classList.remove('active')
    header.style.borderRadius = '0px 0px 8px 8px'
})

dropInterview.addEventListener('mouseleave', () => {
    dropInterview.classList.remove('active')
    header.style.borderRadius = '0px 0px 8px 8px'
})
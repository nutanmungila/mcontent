Feature: Mcontent page
    Background:
        Given I navigate to the page

    @focus
    Scenario: Video title check
        When I click a video
        Then It should contain the titles


    Scenario: Search check
        When I search for a text "Anurag"
        Then Search results should show the searchtext "Anurag" related videos

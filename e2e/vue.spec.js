import { test, expect } from '@playwright/test'

test("affiche la navbar avec le lien vers l'accueil", async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('nav a').first()).toHaveText('Grignotte')
})

test('affiche les liens de navigation principaux', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('nav')).toContainText('Chercher une recette')
  await expect(page.locator('nav')).toContainText('Ajouter une recette')
})
